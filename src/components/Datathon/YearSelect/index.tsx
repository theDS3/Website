'use client';

import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, CheckIcon } from '@radix-ui/react-icons';

type YearSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  labelledBy?: string;
  id?: string;
};

export default function YearSelect({
  value,
  onChange,
  options,
  labelledBy,
  id,
}: YearSelectProps) {
  return (
    <Select.Root
      value={value}
      onValueChange={onChange}>
      <Select.Trigger
        id={id}
        aria-labelledby={labelledBy}
        className="
          inline-flex h-10 w-40 items-center justify-between
          rounded-xl border border-white/15
          bg-black/30 px-4
          text-white
          outline-none transition
          hover:border-white/30
          data-[state=open]:border-white/40
          select-none
        "
        aria-label="Select leaderboard year">
        <Select.Value />
        <Select.Icon className="ml-2 text-white/70">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          side="bottom"
          align="end"
          sideOffset={8}
          className="
            z-50
            w-[var(--radix-select-trigger-width)]
            overflow-hidden
            rounded-xl border border-white/15
            bg-neutral-900/95
            shadow-xl backdrop-blur
          ">
          <Select.Viewport className="p-1">
            {options.map((year) => (
              <Select.Item
                key={year}
                value={year}
                className="
                  relative flex select-none items-center
                  rounded-lg px-3 py-2 pr-9
                  text-sm text-white
                  outline-none transition
                  data-[highlighted]:bg-white/10
                  cursor-pointer
                ">
                <Select.ItemText>{year}</Select.ItemText>
                <Select.ItemIndicator className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70">
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
