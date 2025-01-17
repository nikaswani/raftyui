import { RadioGroup, RadioGroupItem } from "@rafty/ui";

export const radio_examples = {
  "radio:usage": (
    <RadioGroup>
      <RadioGroupItem value="1" id="1">
        Radio 1
      </RadioGroupItem>
      <RadioGroupItem value="2" id="2">
        Radio 2
      </RadioGroupItem>
      <RadioGroupItem value="3" id="3">
        Radio 3
      </RadioGroupItem>
    </RadioGroup>
  ),
  "radio:size": (
    <RadioGroup size="sm">
      <RadioGroupItem value="1" id="4">
        Radio 1
      </RadioGroupItem>
      <RadioGroupItem value="2" id="5">
        Radio 2
      </RadioGroupItem>
      <RadioGroupItem value="3" id="6">
        Radio 3
      </RadioGroupItem>
    </RadioGroup>
  ),
  "radio:default": (
    <RadioGroup defaultValue="2">
      <RadioGroupItem value="1" id="7">
        Radio 1
      </RadioGroupItem>
      <RadioGroupItem value="2" id="8">
        Radio 2
      </RadioGroupItem>
      <RadioGroupItem value="3" id="9">
        Radio 3
      </RadioGroupItem>
    </RadioGroup>
  ),
  "radio:disabled": (
    <RadioGroup defaultValue="1" disabled>
      <RadioGroupItem value="1" id="10">
        Radio 1
      </RadioGroupItem>
      <RadioGroupItem value="2" id="11">
        Radio 2
      </RadioGroupItem>
      <RadioGroupItem value="3" id="12">
        Radio 3
      </RadioGroupItem>
    </RadioGroup>
  ),
};
