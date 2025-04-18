'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { ArrowRight, Calendar as CalendarIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { CustomButton } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'First name is required' }),
  lastName: z.string().min(2, { message: 'Last name is required' }),
  dateOfBirth: z.date({ required_error: 'Date of birth is required' }),
  gender: z.string({ required_error: 'Gender is required' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  nationality: z.string({ required_error: 'Nationality is required' }),
  streetAddress: z.string().min(3, { message: 'Street address is required' }),
  city: z.string().min(2, { message: 'City is required' }),
  postalCode: z.string().min(3, { message: 'Postal code is required' }),
  educationLevel: z.string({ required_error: 'Education level is required' }),
  desiredCourse: z.string({ required_error: 'Please select a desired course' }),
  referralSource: z.string({ required_error: 'Please select how you heard about us' }),
  captchaAnswer: z.string().min(1, { message: 'Please answer the security question' }),
});

interface EnrollmentFormProps {
  initialCourseId?: string;
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ initialCourseId = '' }) => {
  const [captchaValue] = useState(2 + 4);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // State for courses fetched from our server API endpoint
  const [courses, setCourses] = useState<{ id: string; title: string }[]>([]);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [coursesError, setCoursesError] = useState<Error | null>(null);

  // State for nationalities fetched from our server API endpoint
  const [nationalities, setNationalities] = useState<{ id: string; name: string }[]>([]);
  const [nationalitiesLoading, setNationalitiesLoading] = useState(true);
  const [nationalitiesError, setNationalitiesError] = useState<Error | null>(null);

  // Fetch courses from our server API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setCoursesLoading(true);
        const response = await fetch('/api/courses/list');

        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log('Courses from server API:', responseData);

        if (responseData.data && responseData.data.courses) {
          setCourses(responseData.data.courses);
        } else {
          console.warn('No courses data returned from API');
          setCourses([]);
        }
      } catch (err) {
        console.error('Error fetching courses:', err);
        setCoursesError(err instanceof Error ? err : new Error(String(err)));
        toast.error('Error Loading Courses', {
          description: 'Failed to load available courses. Please refresh and try again.',
        });
      } finally {
        setCoursesLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Fetch nationalities from our server API
  useEffect(() => {
    const fetchNationalities = async () => {
      try {
        setNationalitiesLoading(true);
        const response = await fetch('/api/nationalities');

        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log('Nationalities from server API:', responseData);

        if (responseData.data && responseData.data.nationalities) {
          setNationalities(responseData.data.nationalities);
        } else {
          console.warn('No nationalities data returned from API');
          setNationalities([]);
        }
      } catch (err) {
        console.error('Error fetching nationalities:', err);
        setNationalitiesError(err instanceof Error ? err : new Error(String(err)));
        toast.error('Error Loading Nationalities', {
          description: 'Failed to load nationality options. Please refresh and try again.',
        });
      } finally {
        setNationalitiesLoading(false);
      }
    };

    fetchNationalities();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      nationality: '',
      streetAddress: '',
      city: '',
      postalCode: '',
      referralSource: '',
      desiredCourse: initialCourseId, // Set the initial course ID if provided
    },
  });

  // Update the desiredCourse field when initialCourseId changes
  useEffect(() => {
    if (initialCourseId) {
      form.setValue('desiredCourse', initialCourseId);
    }
  }, [initialCourseId, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Check if the captcha answer is correct
    if (Number(values.captchaAnswer) !== captchaValue) {
      toast.error('Incorrect Answer', {
        description: 'Please provide the correct answer to the security question',
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError(null);

      // Format date as YYYY-MM-DD
      const dateOfBirth = values.dateOfBirth.toISOString().split('T')[0];
      console.log('Sending DOB:', dateOfBirth);

      // Map form values to the API format
      const enrollData = {
        firstName: values.firstName,
        lastName: values.lastName,
        dob: dateOfBirth, // Send the date in YYYY-MM-DD format
        gender: values.gender,
        emailAddress: values.email,
        phoneNumber: values.phone,
        nationality: values.nationality,
        streetAddress: values.streetAddress,
        city: values.city,
        postalCode: values.postalCode,
        levelOfEducation: values.educationLevel,
        referral: values.referralSource,
        courseId: values.desiredCourse, // The selected course ID
      };

      // Submit the enrollment via our server API endpoint
      const response = await fetch('/api/enrollment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enrollData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to submit application');
      }

      // Check if the response indicates success
      if (responseData.success) {
        // Clear the form after successful submission
        form.reset();

        // Show a prominent success toast notification
        toast.success('Application Submitted Successfully!', {
          description: "Thank you for your enrollment! We've received your application and will contact you shortly.",
          duration: 5000, // Show for 5 seconds
          action: {
            label: 'Dismiss',
            onClick: () => {},
          },
        });
      } else {
        toast.error('Submission Failed', {
          description: responseData.error || 'There was an error submitting your application. Please try again.',
        });
      }
    } catch (error) {
      console.error('Enrollment submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setSubmitError(errorMessage);
      toast.error('Submission Failed', {
        description: 'There was an error submitting your application. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Display error messages if the submit operation fails
  useEffect(() => {
    if (submitError) {
      toast.error('Enrollment Error', {
        description: submitError || 'There was an error with the enrollment process. Please try again.',
      });
    }
  }, [submitError]);

  return (
    <div className="mx-auto mt-4 sm:mt-10 md:mt-20 max-w-4xl bg-white rounded-lg p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900">Enrollment Application</h2>

      {(coursesLoading || nationalitiesLoading) && (
        <div className="text-center mb-6">
          <p className="text-blue-600">Loading form data...</p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-sm sm:text-base">First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter first name"
                      className="bg-[#F5F5F5] border-0 w-full h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm text-red-500" />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-sm sm:text-base">Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter last name"
                      className="bg-[#F5F5F5] border-0 w-full h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm text-red-500" />
                </FormItem>
              )}
            />

            {/* Date of Birth */}
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel className="font-medium text-sm sm:text-base">Date of Birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full h-10 sm:h-12 pl-3 sm:pl-4 text-left font-normal bg-[#F5F5F5] border-0 text-sm sm:text-base',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? format(field.value, 'MM/dd/yyyy') : <span>mm/dd/yy</span>}
                          <CalendarIcon className="ml-auto h-4 sm:h-5 w-4 sm:w-5 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white z-50 border shadow-md" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        disabled={(date) => date > new Date()}
                        className="bg-white rounded-md [&_.rdp-day_button:hover]:bg-blue-100 [&_.rdp-day_focus]:bg-blue-100 [&_.rdp-day_selected]:bg-blue-600 [&_.rdp-day_selected]:text-white [&_.rdp-day_selected]:hover:bg-blue-700"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage className="text-xs sm:text-sm text-red-500" />
                </FormItem>
              )}
            />

            {/* Gender */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-sm sm:text-base">Gender</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger
                        className={cn(
                          'bg-[#F5F5F5] border-0 w-full h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-6'
                        )}
                      >
                        <SelectValue placeholder="Select gender" className="text-sm sm:text-base" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="text-sm sm:text-base bg-white z-50">
                      <SelectItem
                        value="male"
                        className="text-sm sm:text-base py-2 sm:py-3 data-[selected]:bg-blue-50 data-[selected]:text-blue-600 data-[selected]:font-medium"
                      >
                        Male
                      </SelectItem>
                      <SelectItem
                        value="female"
                        className="text-sm sm:text-base py-2 sm:py-3 data-[selected]:bg-blue-50 data-[selected]:text-blue-600 data-[selected]:font-medium"
                      >
                        Female
                      </SelectItem>
                      <SelectItem
                        value="other"
                        className="text-sm sm:text-base py-2 sm:py-3 data-[selected]:bg-blue-50 data-[selected]:text-blue-600 data-[selected]:font-medium"
                      >
                        Other
                      </SelectItem>
                      <SelectItem
                        value="prefer-not-to-say"
                        className="text-sm sm:text-base py-2 sm:py-3 data-[selected]:bg-blue-50 data-[selected]:text-blue-600 data-[selected]:font-medium"
                      >
                        Prefer not to say
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs sm:text-sm text-red-500" />
                </FormItem>
              )}
            />

            {/* Email Address */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-sm sm:text-base">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter email address"
                      className="bg-[#F5F5F5] border-0 w-full h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm text-red-500" />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-sm sm:text-base">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+XX XX XXX XXXX"
                      className="bg-[#F5F5F5] border-0 w-full h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm text-red-500" />
                </FormItem>
              )}
            />

            {/* Nationality */}
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-sm sm:text-base">Nationality</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger
                        className={cn(
                          'bg-[#F5F5F5] border-0 w-full h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-6'
                        )}
                      >
                        <SelectValue placeholder="Select nationality" className="text-sm sm:text-base" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="text-sm sm:text-base bg-white z-50">
                      {nationalitiesLoading ? (
                        <SelectItem value="loading" disabled className="text-sm sm:text-base py-2 sm:py-3">
                          Loading nationalities...
                        </SelectItem>
                      ) : nationalitiesError ? (
                        <SelectItem value="error" disabled className="text-sm sm:text-base py-2 sm:py-3">
                          Error loading nationalities
                        </SelectItem>
                      ) : nationalities.length ? (
                        nationalities.map((nationality) => (
                          <SelectItem
                            key={nationality.id}
                            value={nationality.id}
                            className="text-sm sm:text-base py-2 sm:py-3 data-[selected]:bg-blue-50 data-[selected]:text-blue-600 data-[selected]:font-medium"
                          >
                            {nationality.name}
                          </SelectItem>
                        ))
                      ) : (
                        <SelectItem value="none" disabled className="text-sm sm:text-base py-2 sm:py-3">
                          No nationalities available
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs sm:text-sm text-red-500" />
                </FormItem>
              )}
            />

            {/* Street Address */}
            <FormField
              control={form.control}
              name="streetAddress"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-sm sm:text-base">Street Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter street address"
                      className="bg-[#F5F5F5] border-0 w-full h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm text-red-500" />
                </FormItem>
              )}
            />

            {/* City */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-sm sm:text-base">City</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter city"
                      className="bg-[#F5F5F5] border-0 w-full h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm text-red-500" />
                </FormItem>
              )}
            />

            {/* Postal Code */}
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-sm sm:text-base">Postal Code</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter postal code"
                      className="bg-[#F5F5F5] border-0 w-full h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm text-red-500" />
                </FormItem>
              )}
            />

            {/* Education Level */}
            <FormField
              control={form.control}
              name="educationLevel"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-sm sm:text-base">Level of Education</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger
                        className={cn(
                          'bg-[#F5F5F5] border-0 w-full h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-6'
                        )}
                      >
                        <SelectValue placeholder="Select education level" className="text-sm sm:text-base" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="text-sm sm:text-base bg-white z-50">
                      <SelectItem
                        value="high_school"
                        className="text-sm sm:text-base py-2 sm:py-3 data-[selected]:bg-blue-50 data-[selected]:text-blue-600 data-[selected]:font-medium"
                      >
                        High School
                      </SelectItem>
                      <SelectItem
                        value="associate"
                        className="text-sm sm:text-base py-2 sm:py-3 data-[selected]:bg-blue-50 data-[selected]:text-blue-600 data-[selected]:font-medium"
                      >
                        Associate Degree
                      </SelectItem>
                      <SelectItem
                        value="bachelor"
                        className="text-sm sm:text-base py-2 sm:py-3 data-[selected]:bg-blue-50 data-[selected]:text-blue-600 data-[selected]:font-medium"
                      >
                        Bachelor&apos;s Degree
                      </SelectItem>
                      <SelectItem
                        value="master"
                        className="text-sm sm:text-base py-2 sm:py-3 data-[selected]:bg-blue-50 data-[selected]:text-blue-600 data-[selected]:font-medium"
                      >
                        Master&apos;s Degree
                      </SelectItem>
                      <SelectItem
                        value="doctorate"
                        className="text-sm sm:text-base py-2 sm:py-3 data-[selected]:bg-blue-50 data-[selected]:text-blue-600 data-[selected]:font-medium"
                      >
                        Doctorate
                      </SelectItem>
                      <SelectItem
                        value="other"
                        className="text-sm sm:text-base py-2 sm:py-3 data-[selected]:bg-blue-50 data-[selected]:text-blue-600 data-[selected]:font-medium"
                      >
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs sm:text-sm text-red-500" />
                </FormItem>
              )}
            />

            {/* Desired Course */}
            <FormField
              control={form.control}
              name="desiredCourse"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-sm sm:text-base">Desired Course</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger
                        className={cn(
                          'bg-[#F5F5F5] border-0 w-full h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-6'
                        )}
                      >
                        <SelectValue placeholder="Select a course" className="text-sm sm:text-base" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="text-sm sm:text-base bg-white z-50">
                      {coursesLoading ? (
                        <SelectItem value="loading" disabled>
                          Loading courses...
                        </SelectItem>
                      ) : coursesError ? (
                        <SelectItem value="error" disabled>
                          Error loading courses
                        </SelectItem>
                      ) : courses.length ? (
                        courses.map((course) => (
                          <SelectItem
                            key={course.id}
                            value={course.id}
                            className="text-sm sm:text-base py-2 sm:py-3 data-[selected]:bg-blue-50 data-[selected]:text-blue-600 data-[selected]:font-medium"
                          >
                            {course.title}
                          </SelectItem>
                        ))
                      ) : (
                        <SelectItem value="none" disabled>
                          No courses available
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs sm:text-sm text-red-500" />
                </FormItem>
              )}
            />

            {/* Referral Source */}
            <FormField
              control={form.control}
              name="referralSource"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-sm sm:text-base">How did you hear about us?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger
                        className={cn(
                          'bg-[#F5F5F5] border-0 w-full h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-6'
                        )}
                      >
                        <SelectValue placeholder="Select referral source" className="text-sm sm:text-base" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="text-sm sm:text-base bg-white z-50">
                      <SelectItem
                        value="social_media"
                        className="text-sm sm:text-base py-2 sm:py-3 data-[selected]:bg-blue-50 data-[selected]:text-blue-600 data-[selected]:font-medium"
                      >
                        Social Media
                      </SelectItem>
                      <SelectItem
                        value="friend"
                        className="text-sm sm:text-base py-2 sm:py-3 data-[selected]:bg-blue-50 data-[selected]:text-blue-600 data-[selected]:font-medium"
                      >
                        Friend or Family
                      </SelectItem>
                      <SelectItem
                        value="search"
                        className="text-sm sm:text-base py-2 sm:py-3 data-[selected]:bg-blue-50 data-[selected]:text-blue-600 data-[selected]:font-medium"
                      >
                        Search Engine
                      </SelectItem>
                      <SelectItem
                        value="advertisement"
                        className="text-sm sm:text-base py-2 sm:py-3 data-[selected]:bg-blue-50 data-[selected]:text-blue-600 data-[selected]:font-medium"
                      >
                        Advertisement
                      </SelectItem>
                      <SelectItem
                        value="other"
                        className="text-sm sm:text-base py-2 sm:py-3 data-[selected]:bg-blue-50 data-[selected]:text-blue-600 data-[selected]:font-medium"
                      >
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs sm:text-sm text-red-500" />
                </FormItem>
              )}
            />
          </div>

          {/* Security Check */}
          <div className="mx-auto w-full col-span-1 sm:col-span-2 md:w-4/5 lg:w-3/5 pt-4 sm:pt-6">
            <div className="flex flex-col sm:flex-row w-full items-start sm:items-end justify-between sm:space-x-4">
              <div className="mb-4 sm:mb-0 w-full sm:w-auto">
                <p className="text-xs sm:text-sm text-gray-500 mb-2">Security check</p>
                <div className="flex items-center space-x-2">
                  <div className="relative rounded-md text-sm">
                    <div className={`absolute rounded-md bg-[#FEDE70] w-full h-full top-1 right-1 z-0`}></div>
                    <div className="relative border-2 bg-[#F9F6EF] border-black rounded-md px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm">
                      <span className="relative z-10 bg-[#F9F6EF]">What is 2 + 4?</span>
                    </div>
                  </div>

                  <span>=</span>
                  <FormField
                    control={form.control}
                    name="captchaAnswer"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder=""
                            className="w-16 sm:w-20 h-10 sm:h-12 bg-[#F5F5F5] border-0 text-sm sm:text-base px-3 sm:px-4"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="w-full sm:w-auto mt-4 sm:mt-0">
                <CustomButton
                  variant="primary"
                  size="md"
                  withIcon={true}
                  endIcon={<ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />}
                  className="w-full sm:w-auto text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 h-auto"
                  type="submit"
                  disabled={isSubmitting || coursesLoading || nationalitiesLoading}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Your Application'}
                </CustomButton>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EnrollmentForm;
