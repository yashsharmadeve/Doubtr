const useBreakText = ({ text }: { text: string }) => {
  const words = text.split(' ');
  return { firstWord: words[0], secondWord: words[1] };
};

export default useBreakText;
