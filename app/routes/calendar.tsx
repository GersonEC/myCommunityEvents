import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/calendar')({
  component: Calendar,
});

function Calendar() {
  return <h1>Calendar</h1>;
}
