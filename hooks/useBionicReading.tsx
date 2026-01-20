import { useState, RefObject } from "react";

export function useBionicReading(
  demoRef: RefObject<HTMLDivElement | null>,
  textContainerRef: RefObject<HTMLDivElement | null>
) {
  const [mouseX, setMouseX] = useState(0);
  const [relativeMouse, setRelativeMouse] = useState(0);

  // 바이오닉 리딩 적용 함수
  const applyBionic = (word: string) => {
    if (word.length <= 2) {
      return <><b style={{ fontWeight: 700 }}>{word[0]}</b>{word.slice(1)}</>;
    } else if (word.length <= 4) {
      return <><b style={{ fontWeight: 700 }}>{word.slice(0, 2)}</b>{word.slice(2)}</>;
    } else {
      const boldLength = Math.ceil(word.length * 0.4);
      return <><b style={{ fontWeight: 700 }}>{word.slice(0, boldLength)}</b>{word.slice(boldLength)}</>;
    }
  };

  // 마우스 X 위치 추적 (RAF로 최적화)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (demoRef.current && textContainerRef.current) {
      const demoRect = demoRef.current.getBoundingClientRect();
      const textRect = textContainerRef.current.getBoundingClientRect();
      
      // 전체 컨테이너 기준 위치
      const x = e.clientX - demoRect.left;
      // 텍스트 영역 기준 상대 위치
      const relativeX = e.clientX - textRect.left;
      
      // 컨테이너 영역 내에서만 작동
      if (x >= 0 && x <= demoRect.width) {
        requestAnimationFrame(() => {
          setMouseX(x);
          setRelativeMouse(relativeX);
        });
      }
    }
  };

  return {
    mouseX,
    relativeMouse,
    handleMouseMove,
    applyBionic
  };
}