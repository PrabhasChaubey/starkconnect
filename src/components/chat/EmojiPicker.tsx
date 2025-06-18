"use client";

import { SmileIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import EmojiPickerReact, { EmojiClickData } from "emoji-picker-react";
import { Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";

interface EmojiPickerProps {
  onChange: (emoji: string) => void;
}

const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
  const { theme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button">
          <SmileIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 z-50">
        <EmojiPickerReact
          theme={(theme === "dark" ? "dark" : "light") as Theme}

          onEmojiClick={(emojiData: EmojiClickData) => onChange(emojiData.emoji)}
        />
      </PopoverContent>
    </Popover>
  );
};

export default EmojiPicker;
