interface ScientificPanelProps {
  onInput: (value: string) => void;
}

export default function ScientificPanel({ onInput }: ScientificPanelProps) {
  const buttons = [
    { label: 'sin', value: 'sin(' },
    { label: 'cos', value: 'cos(' },
    { label: 'tan', value: 'tan(' },
    { label: 'log', value: 'log' },
    { label: 'ln', value: 'ln' },
    { label: '√', value: 'sqrt' },
    { label: 'x²', value: '**2' },
    { label: 'π', value: 'π' },
    { label: 'e', value: 'e' },
    { label: '(', value: '(' },
    { label: ')', value: ')' },
    { label: 'xʸ', value: 'pow' },
  ];

  return (
    <div className="grid grid-cols-4 gap-1.5 mb-3">
      {buttons.map((btn, index) => (
        <button
          key={index}
          onClick={() => onInput(btn.value)}
          className="h-10 text-sm font-medium rounded-btn bg-bg-tertiary hover:bg-gray-200 text-text-primary transition-all shadow-sm active:scale-95"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
