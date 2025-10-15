import React from "react";

interface Props {
  subtitle: string;
  callMyAPI: () => void;
}

export const MySubtitle = React.memo(({subtitle}: Props) => {
  console.log('My Subtitle re-render');
  return (
    <>
      <h6 className="text-2xl font-bold">{subtitle}</h6>
      <button className="bg-indigo-500 text-white px-y py-1">Llamar a función</button>
    </>

  );
})