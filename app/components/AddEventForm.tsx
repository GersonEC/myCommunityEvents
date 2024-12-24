import React from 'react';
import ReactDOM from 'react-dom/client';
import { useForm } from '@tanstack/react-form';
import { Event as EventPrisma } from '@prisma/client';

type Props =
  | {
      mode: 'add';
      handleAdd: (values: Event) => void;
      handleClose: () => void;
    }
  | {
      mode: 'edit';
      event: Event;
      handleEdit: (values: Event) => void;
      handleClose: () => void;
    };

type Event = Omit<EventPrisma, 'updatedAt' | 'createdAt'>;

export const AddEventForm: React.FC<Props> = (props: Props) => {
  const initialEventFormDefaultValue: Event = {
    id: props.mode === 'add' ? '' : props.event.id,
    communityName: props.mode === 'add' ? '' : props.event.communityName,
    eventDate: props.mode === 'add' ? new Date() : props.event.eventDate,
    eventDescription: props.mode === 'add' ? '' : props.event.eventDescription,
    eventLink: props.mode === 'add' ? '' : props.event.eventLink,
    eventTitle: props.mode === 'add' ? '' : props.event.eventTitle,
  };

  const form = useForm<Event>({
    defaultValues: initialEventFormDefaultValue,
    onSubmit: async ({ value }) => {
      // Do something with form data
      if (props.mode === 'add') {
        props.handleAdd(value);
      } else {
        props.handleEdit(value);
      }
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2 style={{ color: 'white' }}>
          {props.mode === 'add' ? 'Add new Event' : 'Edit Event'}
        </h2>
        <button
          style={{
            borderRadius: '4px',
            border: '1px solid white',
            background: 'none',
            fontWeight: '600',
            color: 'white',
            padding: '8px',
          }}
          onClick={props.handleClose}
          title='Close'
        >
          X
        </button>
      </div>
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
                    padding: '6px 2px',
                    borderStyle: 'none',
                    borderRadius: '2px',
                    backgroundColor: '#DDDDDD',
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
                    padding: '6px 2px',
                    borderStyle: 'none',
                    borderRadius: '2px',
                    backgroundColor: '#DDDDDD',
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
                    padding: '6px 2px',
                    borderStyle: 'none',
                    borderRadius: '2px',
                    backgroundColor: '#DDDDDD',
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
                    padding: '6px 2px',
                    borderStyle: 'none',
                    borderRadius: '2px',
                    backgroundColor: '#DDDDDD',
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
                    padding: '6px 2px',
                    borderStyle: 'none',
                    borderRadius: '2px',
                    backgroundColor: '#DDDDDD',
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
          <button
            style={{
              color: 'rgba(32,34,38,255)',
              backgroundColor: 'white',
              borderRadius: '4px',
              border: '1px solid white',
              padding: '6px 24px',
              fontWeight: '600',
            }}
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
