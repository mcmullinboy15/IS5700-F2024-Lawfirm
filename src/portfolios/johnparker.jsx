export default function JohnParker() {
  return (
    <>
      <div>
        <h1>John Parker</h1>
      </div>
      <div className="w-full grid gridcols-2">
        <div>
            <p>John Parker</p>
            <p>Software developer</p>
        </div>
      </div>
      <div className="col-span-1 mx-auto">
      <img src="./assets/johnparker.jpg" alt="johnparker" height="198" widtch="265"/>
      </div>
      
    </>
  );
}
