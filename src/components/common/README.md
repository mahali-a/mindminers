# Common Components

This directory contains reusable components that can be used throughout the application.

## CustomButton

A flexible button component that extends the standard shadcn UI Button with additional variants, sizes, and options.

### Features

- Multiple color variants
- Different size options
- Optional rounded corners
- Support for icons (start and end)
- Loading state
- Link functionality
- Fully typed with TypeScript

### Usage

```tsx
import { CustomButton } from '@/components/common';
import { ArrowRight } from 'lucide-react';

// Basic Button
<CustomButton>Click Me</CustomButton>

// With variants
<CustomButton variant="primary">Primary Button</CustomButton>
<CustomButton variant="secondary">Secondary Button</CustomButton>
<CustomButton variant="outline">Outline Button</CustomButton>
<CustomButton variant="ghost">Ghost Button</CustomButton>
<CustomButton variant="destructive">Destructive Button</CustomButton>
<CustomButton variant="cta">CTA Button</CustomButton>
<CustomButton variant="light">Light Button</CustomButton>
<CustomButton variant="subtle">Subtle Button</CustomButton>

// With sizes
<CustomButton size="sm">Small Button</CustomButton>
<CustomButton size="md">Medium Button</CustomButton>
<CustomButton size="lg">Large Button</CustomButton>
<CustomButton size="xl">Extra Large Button</CustomButton>

// Rounded corners
<CustomButton rounded="full">Rounded Button</CustomButton>

// With icons
<CustomButton
  startIcon={<ArrowRight />}
  endIcon={<ArrowRight />}
  withIcon={true}
>
  Button with Icons
</CustomButton>

// As a link
<CustomButton href="/about">Link Button</CustomButton>
<CustomButton href="https://example.com" target="_blank">External Link</CustomButton>

// Loading state
<CustomButton isLoading={true} loadingText="Saving...">Save</CustomButton>

// Full example
<CustomButton
  variant="primary"
  size="lg"
  rounded="full"
  withIcon={true}
  endIcon={<ArrowRight />}
  onClick={() => console.log('Clicked!')}
  className="my-custom-class"
>
  Learn More
</CustomButton>
```

### Props

| Prop        | Type                                                                                              | Default   | Description                                   |
| ----------- | ------------------------------------------------------------------------------------------------- | --------- | --------------------------------------------- |
| variant     | 'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive' \| 'cta' \| 'light' \| 'subtle' | 'primary' | The visual style of the button                |
| size        | 'sm' \| 'md' \| 'lg' \| 'xl'                                                                      | 'md'      | The size of the button                        |
| rounded     | 'default' \| 'full'                                                                               | 'default' | The border radius style                       |
| withIcon    | boolean                                                                                           | false     | Whether the button contains icons             |
| href        | string                                                                                            | undefined | Optional URL to make the button act as a link |
| target      | string                                                                                            | undefined | Link target attribute (e.g., '\_blank')       |
| startIcon   | React.ReactNode                                                                                   | undefined | Icon to display before the button text        |
| endIcon     | React.ReactNode                                                                                   | undefined | Icon to display after the button text         |
| isLoading   | boolean                                                                                           | false     | Whether to show a loading spinner             |
| loadingText | string                                                                                            | undefined | Text to display when loading                  |
| className   | string                                                                                            | undefined | Additional CSS classes                        |
| ...         | ...                                                                                               | ...       | All standard button attributes                |
