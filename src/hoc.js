const HOC = (Wrapp, c) => {
  function innerFn() {
    return (
      <div className={c}>
        <Wrapp />
      </div>
    );
  }

  return innerFn;
};

export default HOC;
