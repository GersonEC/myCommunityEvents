import React from 'react';
import ReactDOM from 'react-dom/client';
import { useForm } from '@tanstack/react-form';
import { Event } from './EventCard';

interface Props {
  handleSubmit: (values: Event) => void;
}

const initialEventFormDefaultValue: Event = {
  communityName: '',
  eventDate: new Date(),
  eventDescription: '',
  eventLink: '',
  eventTitle: '',
};

export const AddEventForm: React.FC<Props> = ({ handleSubmit }) => {
  const form = useForm<Event>({
    defaultValues: initialEventFormDefaultValue,
    onSubmit: async ({ value }) => {
      // Do something with form data
      handleSubmit(value);
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div>
          <form.Field
            name='communityName'
            children={(field) => (
              <>
                <label htmlFor={field.name}>{field.name}</label>
                <input
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </>
            )}
          />
        </div>
        <div>
          <form.Field
            name='eventTitle'
            children={(field) => (
              <>
                <label htmlFor={field.name}>{field.name}</label>
                <input
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </>
            )}
          />
        </div>
        <div>
          <form.Field
            name='eventDescription'
            children={(field) => (
              <>
                <label htmlFor={field.name}>{field.name}</label>
                <textarea
                  name={field.name}
                  rows={5}
                  maxLength={300}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </>
            )}
          />
        </div>
        <div>
          <form.Field
            name='eventLink'
            children={(field) => (
              <>
                <label htmlFor={field.name}>{field.name}</label>
                <input
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </>
            )}
          />
        </div>
        <div>
          <form.Field
            name='eventDate'
            children={(field) => (
              <>
                <label htmlFor={field.name}>{field.name}</label>
                <input
                  name={field.name}
                  type='date'
                  min={new Date().toISOString().slice(0, 10)}
                  value={field.state.value.toISOString().slice(0, 10)}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(new Date(e.target.value))}
                />
              </>
            )}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
