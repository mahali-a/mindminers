'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { ArrowRight, Calendar as CalendarIcon } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

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

const EnrollmentForm = () => {
  const [captchaValue] = useState(2 + 4);

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
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Check if the captcha answer is correct
    if (Number(values.captchaAnswer) !== captchaValue) {
      toast.error('Incorrect Answer', {
        description: 'Please provide the correct answer to the security question',
      });
      return;
    }

    console.log(values);
    toast.success('Application Submitted', {
      description: 'Thank you for submitting your application! We&apos;ll contact you shortly.',
    });
  }

  return (
    <div className="mx-auto md:mt-20 max-w-4xl bg-white rounded-lg p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-base">First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter first name"
                      className="bg-gray-50 w-full h-12 text-base px-4"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-base">Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter last name" className="bg-gray-50 w-full h-12 text-base px-4" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Date of Birth */}
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel className="font-medium text-base">Date of Birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full h-12 pl-4 text-left font-normal bg-gray-50 text-base',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? format(field.value, 'MM/dd/yyyy') : <span>mm/dd/yy</span>}
                          <CalendarIcon className="ml-auto h-5 w-5 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        disabled={(date) => date > new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Gender */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-base">Gender</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-gray-50 w-full h-12 text-base px-4">
                        <SelectValue placeholder="Select gender" className="text-base" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="text-base">
                      <SelectItem value="male" className="text-base py-3">
                        Male
                      </SelectItem>
                      <SelectItem value="female" className="text-base py-3">
                        Female
                      </SelectItem>
                      <SelectItem value="other" className="text-base py-3">
                        Other
                      </SelectItem>
                      <SelectItem value="prefer-not-to-say" className="text-base py-3">
                        Prefer not to say
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Address */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-base">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter email address"
                      className="bg-gray-50 w-full h-12 text-base px-4"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-base">Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+XX XX XXX XXXX" className="bg-gray-50 w-full h-12 text-base px-4" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Nationality */}
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-base">Nationality</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-gray-50 w-full h-12 text-base px-4">
                        <SelectValue placeholder="Select nationality" className="text-base" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="text-base">
                      <SelectItem value="ghana" className="text-base py-3">
                        Ghana
                      </SelectItem>
                      <SelectItem value="nigeria" className="text-base py-3">
                        Nigeria
                      </SelectItem>
                      <SelectItem value="kenya" className="text-base py-3">
                        Kenya
                      </SelectItem>
                      <SelectItem value="south-africa" className="text-base py-3">
                        South Africa
                      </SelectItem>
                      <SelectItem value="other" className="text-base py-3">
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Street Address */}
            <FormField
              control={form.control}
              name="streetAddress"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-base">Street Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter street address"
                      className="bg-gray-50 w-full h-12 text-base px-4"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* City */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-base">City</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter city" className="bg-gray-50 w-full h-12 text-base px-4" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Postal Code */}
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-base">Postal Code</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter postal code"
                      className="bg-gray-50 w-full h-12 text-base px-4"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Education Level */}
            <FormField
              control={form.control}
              name="educationLevel"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-base">Highest Level of Education Completed</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-gray-50 w-full h-12 text-base px-4">
                        <SelectValue placeholder="Select education level" className="text-base" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="text-base">
                      <SelectItem value="high-school" className="text-base py-3">
                        High School
                      </SelectItem>
                      <SelectItem value="secondary" className="text-base py-3">
                        Secondary
                      </SelectItem>
                      <SelectItem value="diploma" className="text-base py-3">
                        Diploma
                      </SelectItem>
                      <SelectItem value="associate" className="text-base py-3">
                        Associate Degree
                      </SelectItem>
                      <SelectItem value="bachelor" className="text-base py-3">
                        Bachelor&apos;s Degree
                      </SelectItem>
                      <SelectItem value="masters" className="text-base py-3">
                        Master&apos;s Degree
                      </SelectItem>
                      <SelectItem value="doctorate" className="text-base py-3">
                        Doctorate
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Desired Course */}
            <FormField
              control={form.control}
              name="desiredCourse"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-base">Desired Course</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-gray-50 w-full h-12 text-base px-4">
                        <SelectValue placeholder="Select desired course" className="text-base" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="text-base">
                      <SelectItem value="cognitive-training" className="text-base py-3">
                        Cognitive Training
                      </SelectItem>
                      <SelectItem value="data-science" className="text-base py-3">
                        Data Science
                      </SelectItem>
                      <SelectItem value="machine-learning" className="text-base py-3">
                        Machine Learning
                      </SelectItem>
                      <SelectItem value="software-development" className="text-base py-3">
                        Software Development
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* How did you hear about us */}
            <FormField
              control={form.control}
              name="referralSource"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-medium text-base">How did you hear about mindminers?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-gray-50 w-full h-12 text-base px-4">
                        <SelectValue placeholder="Select option" className="text-base" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="text-base">
                      <SelectItem value="friend-family" className="text-base py-3">
                        Friend/Family
                      </SelectItem>
                      <SelectItem value="social-media" className="text-base py-3">
                        Social Media
                      </SelectItem>
                      <SelectItem value="search-engine" className="text-base py-3">
                        Search Engine
                      </SelectItem>
                      <SelectItem value="advertisement" className="text-base py-3">
                        Advertisement
                      </SelectItem>
                      <SelectItem value="other" className="text-base py-3">
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Security Check */}
          <div className="mx-auto md:w-3/5 pt-6">
            <div className="flex flex-col md:flex-row md:w-full mx-auto md:items-end md:justify-between md:space-x-4">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-gray-500 mb-2">Security check</p>
                <div className="flex items-center space-x-2">
                  <div className="relative bg-green rounded-md text-sm">
                    <div className={`absolute rounded-md bg-[#FEDE70] w-full h-full top-1 right-1 z-0`}></div>
                    <div className="relative border-2 bg-[#F9F6EF] border-black rounded-md px-3 py-2 text-sm">
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
                          <Input placeholder="" className="w-20 h-12 bg-gray-50 text-base px-4" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="bg-blue-600 hover:bg-blue-600/90 text-white px-8 py-6 h-12 text-base">
                  Submit Your Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EnrollmentForm;
