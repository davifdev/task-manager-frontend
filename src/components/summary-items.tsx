import { LayoutListIcon, ListCheckIcon, LoaderCircle } from "lucide-react";
import {
  SummaryCard,
  SummaryContent,
  SummaryHeader,
  SummaryIcon,
  SummarySubtitle,
  SummaryTitle,
} from "./summary-card";

export const SummaryItems = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      <SummaryCard>
        <SummaryContent>
          <SummaryHeader>
            <SummarySubtitle>5</SummarySubtitle>
            <SummaryIcon>
              <LayoutListIcon />
            </SummaryIcon>
          </SummaryHeader>
          <SummaryTitle>Tarefas disponíveis</SummaryTitle>
        </SummaryContent>
      </SummaryCard>
      <SummaryCard>
        <SummaryContent>
          <SummaryHeader>
            <SummarySubtitle>2</SummarySubtitle>
            <SummaryIcon>
              <ListCheckIcon />
            </SummaryIcon>
          </SummaryHeader>
          <SummaryTitle>Tarefas concluídas</SummaryTitle>
        </SummaryContent>
      </SummaryCard>
      <SummaryCard>
        <SummaryContent>
          <SummaryHeader>
            <SummarySubtitle>1</SummarySubtitle>
            <SummaryIcon>
              <LoaderCircle />
            </SummaryIcon>
          </SummaryHeader>
          <SummaryTitle>Tarefas em andamento</SummaryTitle>
        </SummaryContent>
      </SummaryCard>
      <SummaryCard>
        <SummaryContent>
          <SummaryHeader>
            <SummarySubtitle>0</SummarySubtitle>
            <SummaryIcon>
              <LoaderCircle />
            </SummaryIcon>
          </SummaryHeader>
          <SummaryTitle>Tarefas não iniciadas</SummaryTitle>
        </SummaryContent>
      </SummaryCard>
    </div>
  );
};
