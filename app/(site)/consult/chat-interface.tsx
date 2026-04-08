'use client';

import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import type { UIMessage } from 'ai';
import { Button } from '@/components/ui/button';

const WELCOME_MESSAGES: UIMessage[] = [
  {
    id: 'welcome',
    role: 'assistant',
    parts: [
      {
        type: 'text',
        text: "Welcome. I'm the AI consultation assistant for Shueb Hussain's legal practice. I can help you understand the nature of your legal matter and what to expect before scheduling a formal consultation.\n\nPlease describe your situation — what legal issue are you facing? I'll ask clarifying questions to help us prepare for your consultation.",
      },
    ],
  },
];

export function ChatInterface() {
  const [input, setInput] = useState('');

  const { messages, sendMessage, status, error } = useChat({
    messages: WELCOME_MESSAGES,
  });

  const isActive = status === 'streaming' || status === 'submitted';

  const submit = () => {
    const trimmed = input.trim();
    if (!trimmed || isActive) return;
    setInput('');
    sendMessage({ text: trimmed });
  };

  return (
    <div className="rounded-sm border border-border bg-bg-card overflow-hidden">
      {/* Messages area */}
      <div className="h-[500px] overflow-y-auto p-6 space-y-6">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] rounded-sm px-5 py-4 ${
                msg.role === 'user'
                  ? 'bg-accent/15 text-text-primary border border-accent/20'
                  : 'bg-bg-elevated text-text-secondary border border-border'
              }`}
            >
              {msg.role === 'assistant' && (
                <p className="text-xs text-accent mb-2 tracking-widest uppercase">AI Assistant</p>
              )}
              <div className="text-sm leading-relaxed whitespace-pre-wrap">
                {msg.parts
                  ?.filter((p): p is { type: 'text'; text: string } => p.type === 'text')
                  .map((p) => p.text)
                  .join('') ?? ''}
              </div>
            </div>
          </div>
        ))}

        {isActive && messages[messages.length - 1]?.role === 'user' && (
          <div className="flex justify-start">
            <div className="bg-bg-elevated border border-border rounded-sm px-5 py-4">
              <p className="text-xs text-accent mb-2 tracking-widest uppercase">AI Assistant</p>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-text-muted animate-pulse" />
                <span className="h-2 w-2 rounded-full bg-text-muted animate-pulse [animation-delay:150ms]" />
                <span className="h-2 w-2 rounded-full bg-text-muted animate-pulse [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="rounded-sm border border-red-500/30 bg-red-500/10 p-4">
            <p className="text-sm text-red-400">
              {error.message || 'Something went wrong. Please try again or contact us directly.'}
            </p>
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="border-t border-border p-4">
        <div className="flex gap-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
            placeholder="Describe your legal matter..."
            rows={2}
            disabled={isActive}
            className="flex-1 rounded-sm border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors resize-none disabled:opacity-50"
          />
          <Button
            onClick={submit}
            disabled={isActive || !input.trim()}
            className="self-end"
          >
            Send
          </Button>
        </div>
        <p className="text-xs text-text-muted/50 mt-2">
          Press Enter to send. Shift+Enter for new line.
        </p>
      </div>
    </div>
  );
}
