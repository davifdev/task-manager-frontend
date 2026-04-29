import { ArrowLeftIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { InputSelect } from "../components/input-select";

export const EditTask = () => {
  return (
    <section className="w-full space-y-6 px-8 pt-14">
      <div className="flex items-end justify-between">
        <div className="space-y-3">
          <div
            className="bg-primary flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-white"
            role="link"
            aria-label="Ir para página anterior"
            title="Ir para página anterior"
          >
            <ArrowLeftIcon size={18} />
          </div>
          <div className="text-dark-gray flex items-center">
            <span>Minhas Tarefas</span>
            <span>
              <ChevronRightIcon size={18} />
            </span>
            <span className="text-primary font-semibold">Ir para academia</span>
          </div>
          <h2 className="text-dark-blue text-2xl font-semibold">
            Ir para academia
          </h2>
        </div>
        <Button
          variant="danger"
          aria-label="Deletar tarefa"
          title="Deletar tarefa"
        >
          <Trash2Icon size={18} />
          Deletar tarefa
        </Button>
      </div>
      <div className="space-y-4 rounded-lg bg-white p-6">
        <Input
          labelText="Título"
          placeholder="Título da tarefa"
          aria-label="Descrição da tarefa"
        />
        <InputSelect labelText="Horário" aria-label="Horário da tarefa" />
        <Input
          labelText="Descrição"
          placeholder="Descrição da tarefa"
          aria-label="Descrição da tarefa"
        />
      </div>
      <div className="flex items-center justify-end gap-2">
        <Button
          variant="cancel"
          size="lg"
          aria-label="Cancelar edição"
          title="Cancelar edição"
        >
          Cancelar
        </Button>
        <Button
          variant="default"
          size="lg"
          aria-label="Salvar edição"
          title="Salvar edição"
        >
          Salvar
        </Button>
      </div>
    </section>
  );
};
