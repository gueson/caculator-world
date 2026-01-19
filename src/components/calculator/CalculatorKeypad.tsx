interface CalculatorKeypadProps {
  onInput: (value: string) => void;
}

export default function CalculatorKeypad({ onInput }: CalculatorKeypadProps) {
  const buttons = [
    'C', 'DEL', '%', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=', ''
  ];

  const getButtonStyle = (value: string): string => {
    if (value === '=') {
      return 'bg-primary hover:bg-primary-hover text-white';
    }
    if (['÷', '×', '-', '+'].includes(value)) {
      return 'bg-primary hover:bg-primary-hover text-white';
    }
    if (value === 'C' || value === 'DEL') {
      return 'bg-bg-tertiary hover:bg-gray-200 text-text-primary';
    }
    return 'bg-white hover:bg-gray-50 text-text-primary border border-border';
  };

  const handleButtonClick = (value: string) => {
    if (value === '') return;

    let inputValue = value;
    if (value === '×') inputValue = '*';
    if (value === '÷') inputValue = '/';

    onInput(inputValue);
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      {buttons.map((btn, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(btn)}
          className={`h-12 text-xl font-medium rounded-btn transition-all shadow-sm active:scale-95 ${
            btn === '' ? 'invisible' : getButtonStyle(btn)
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}
