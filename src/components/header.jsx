

function Header({img, title, description}) {
 
  return (
    <>
    <div>
        <img src={img} alt="logo" />
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
    </>
  );
}
export default Header;
