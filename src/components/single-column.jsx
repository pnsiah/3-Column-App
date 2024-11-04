import "../components/single-component.css";
// import SVG from "../../images/icon-suvs.svg";

function SingleColumn(props) {
  const col = props.columns;

  return (
    <>
      {col.map((singleCol, index) => (
        <div key={index} className="single-component">
          <div className="svg-logo">
            <span className="logo-bg">
              <img src={singleCol.colImg} alt="" />
            </span>
          </div>
          <h3 className="column-title">{singleCol.colTitle}</h3>
          <div className="column-body">
            <p>{singleCol.text}</p>
          </div>
          <div>
            <button className="btn">Learn More</button>
          </div>
        </div>
      ))}
    </>
  );
}
export default SingleColumn;
