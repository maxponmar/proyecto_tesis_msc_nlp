"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SectionThresholds } from "@/lib/nlp/constants";

interface SectionSelectorProps {
  sections: SectionThresholds[];
  selected: SectionThresholds | null;
  onSelect: (section: SectionThresholds) => void;
}

export function SectionSelector({
  sections,
  selected,
  onSelect,
}: SectionSelectorProps) {
  return (
    <Select
      value={selected?.section ?? ""}
      onValueChange={(value) => {
        const section = sections.find((s) => s.section === value);
        if (section) onSelect(section);
      }}
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Selecciona una sección" />
      </SelectTrigger>
      <SelectContent>
        {sections.map((s) => (
          <SelectItem key={s.section} value={s.section}>
            {s.section}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
