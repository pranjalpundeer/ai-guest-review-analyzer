/**
 * Component Showcase Page
 * Live reference for every primitive in src/components/ui/ — Buttons,
 * Inputs, Modal, Toast, and Loader — plus their variants, sizes, and
 * states. Reachable at /components.
 */

import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Button, Input, Modal, Loader } from '../components/ui';
import { useToast } from '../context/ToastContext';

const ShowcaseSection = ({ title, description, children }) => (
  <div className="card mb-8">
    <h3 className="text-lg font-semibold text-himalaya-blue dark:text-himalaya-mist mb-1">
      {title}
    </h3>
    {description && (
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{description}</p>
    )}
    <div className="space-y-6">{children}</div>
  </div>
);

const SwatchLabel = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
    {children}
  </p>
);

const ComponentShowcase = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const { showToast } = useToast();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionTitle
        eyebrow="Developer Reference"
        title="Component Library"
        subtitle="Every reusable primitive from src/components/ui/ — used throughout the Home, Dashboard, and Login/Signup screens."
        center={false}
      />

      {/* ───────────── Buttons ───────────── */}
      <ShowcaseSection title="Buttons" description="Variants, sizes, states, and link rendering.">
        <div>
          <SwatchLabel>Variants</SwatchLabel>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <div className="px-4 py-2 rounded-xl bg-himalaya-blue">
              <Button variant="outline">Outline</Button>
            </div>
          </div>
        </div>

        <div>
          <SwatchLabel>Sizes</SwatchLabel>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div>
          <SwatchLabel>States</SwatchLabel>
          <div className="flex flex-wrap items-center gap-3">
            <Button icon={<span>🧠</span>}>With Icon</Button>
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button fullWidth className="max-w-xs">Full Width</Button>
          </div>
        </div>

        <div>
          <SwatchLabel>Renders as a Link</SwatchLabel>
          <div className="flex flex-wrap gap-3">
            <Button to="/dashboard" variant="secondary">Internal link (to="/dashboard")</Button>
            <Button href="https://github.com" variant="ghost">External link (href)</Button>
          </div>
        </div>
      </ShowcaseSection>

      {/* ───────────── Inputs ───────────── */}
      <ShowcaseSection title="Inputs" description="Text, email, password, textarea, icons, and error states.">
        <div className="grid sm:grid-cols-2 gap-6">
          <Input
            label="Text Input"
            placeholder="Tenzin Sherpa"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <Input
            label="Email Input"
            type="email"
            placeholder="you@hotel.com"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            icon={<span>✉️</span>}
          />
          <Input
            label="Password Input"
            type="password"
            placeholder="••••••••"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            helperText="Click the eye icon to reveal"
          />
          <Input
            label="With Error"
            placeholder="you@hotel.com"
            value="not-an-email"
            onChange={() => {}}
            error="Please enter a valid email address."
          />
        </div>
        <div>
          <Input
            label="Textarea"
            type="textarea"
            rows={4}
            placeholder="Paste guest reviews here, one per line…"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
          />
        </div>
      </ShowcaseSection>

      {/* ───────────── Modal ───────────── */}
      <ShowcaseSection title="Modal Demo" description="Centered dialog with backdrop, header, body, and footer.">
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Example Modal"
          footer={(
            <>
              <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button onClick={() => setModalOpen(false)}>Confirm</Button>
            </>
          )}
        >
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            This is the same Modal component used for the &ldquo;clear reviews&rdquo; confirmation
            in the AI analyzer and the Review Detail view in the dashboard table.
            It closes on Escape, on backdrop click, or via the buttons below.
          </p>
        </Modal>
      </ShowcaseSection>

      {/* ───────────── Toast ───────────── */}
      <ShowcaseSection title="Toast Demo" description="Fire a notification — watch the bottom-right corner of the screen.">
        <div className="flex flex-wrap gap-3">
          <Button variant="secondary" onClick={() => showToast('Reviews exported to CSV successfully.', 'success')}>
            Trigger Success
          </Button>
          <Button variant="secondary" onClick={() => showToast('Analysis failed — please try again.', 'error')}>
            Trigger Error
          </Button>
          <Button variant="secondary" onClick={() => showToast('This feature is coming soon.', 'warning')}>
            Trigger Warning
          </Button>
          <Button variant="secondary" onClick={() => showToast('Sign-in functionality requires a backend.', 'info')}>
            Trigger Info
          </Button>
        </div>
      </ShowcaseSection>

      {/* ───────────── Loader ───────────── */}
      <ShowcaseSection title="Loader Demo" description="Spinner sizes and visual variants.">
        <div>
          <SwatchLabel>Sizes</SwatchLabel>
          <div className="flex flex-wrap items-center gap-6">
            <Loader size="sm" />
            <Loader size="md" />
            <Loader size="lg" />
            <Loader size="xl" />
          </div>
        </div>
        <div>
          <SwatchLabel>Variants</SwatchLabel>
          <div className="flex flex-wrap items-center gap-6">
            <Loader variant="default" size="lg" />
            <div className="bg-himalaya-blue p-4 rounded-xl">
              <Loader variant="light" size="lg" />
            </div>
            <Loader variant="mountain" size="lg" />
          </div>
        </div>
        <div>
          <SwatchLabel>With Label</SwatchLabel>
          <Loader size="md" label="Analyzing reviews…" />
        </div>
      </ShowcaseSection>
    </div>
  );
};

export default ComponentShowcase;
