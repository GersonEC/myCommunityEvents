import React from 'react';
import ReactDOM from 'react-dom/client';
import { useForm } from '@tanstack/react-form';
import { Event as EventPrisma } from '@prisma/client';

interface Props {
  handleSubmit: (values: Event) => void;
  handleClose: () => void;
}

type Event = Omit<EventPrisma, 'updatedAt' | 'createdAt' | 'id'>;

const initialEventFormDefaultValue: Event = {
  communityName: '',
  eventDate: new Date(),
  eventDescription: '',
  eventLink: '',
  eventTitle: '',
};

export const AddEventForm: React.FC<Props> = ({
  handleSubmit,
  handleClose,
}) => {
  const form = useForm<Event>({
    defaultValues: initialEventFormDefaultValue,
    onSubmit: async ({ value }) => {
      // Do something with form data
      handleSubmit(value);
    },
  });

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <button
        style={{
          borderRadius: '4px',
          border: '1px solid white',
          background: 'none',
          alignSelf: 'self-end',
          fontWeight: '600',
          color: 'white',
          padding: '8px',
        }}
        onClick={handleClose}
      >
        X
      </button>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          fontSize: '1rem',
          color: 'white',
        }}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div style={{ width: '100%' }}>
          <form.Field
            name='communityName'
            children={(field) => (
              <div>
                <label htmlFor={field.name}>
                  <p style={{ margin: '2px 0' }}>Community Name</p>
                </label>
                <input
                  style={{
                    width: '100%',
                    padding: '4px 2px',
                    borderStyle: 'none',
                    borderRadius: '2px',
                  }}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          />
        </div>
        <div style={{ width: '100%' }}>
          <form.Field
            name='eventTitle'
            children={(field) => (
              <>
                <label htmlFor={field.name}>
                  <p style={{ margin: '2px 0' }}>Event Title</p>
                </label>
                <input
                  style={{
                    width: '100%',
                    padding: '4px 2px',
                    borderStyle: 'none',
                    borderRadius: '2px',
                  }}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </>
            )}
          />
        </div>
        <div style={{ width: '100%' }}>
          <form.Field
            name='eventDescription'
            children={(field) => (
              <>
                <label htmlFor={field.name}>
                  <p style={{ margin: '2px 0' }}>Event Description</p>
                </label>
                <textarea
                  style={{
                    width: '100%',
                    padding: '4px 2px',
                    borderStyle: 'none',
                    borderRadius: '2px',
                  }}
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
        <div style={{ width: '100%' }}>
          <form.Field
            name='eventLink'
            children={(field) => (
              <>
                <label htmlFor={field.name}>
                  <p style={{ margin: '2px 0' }}>Event Link</p>
                </label>
                <input
                  style={{
                    width: '100%',
                    padding: '4px 2px',
                    borderStyle: 'none',
                    borderRadius: '2px',
                  }}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </>
            )}
          />
        </div>
        <div style={{ width: '100%' }}>
          <form.Field
            name='eventDate'
            children={(field) => (
              <>
                <label htmlFor={field.name}>
                  <p style={{ margin: '2px 0' }}>Event Date</p>
                </label>
                <input
                  style={{
                    width: '100%',
                    padding: '4px 2px',
                    borderStyle: 'none',
                    borderRadius: '2px',
                  }}
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={{ padding: '4px 16px' }} type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
