import Button from "../components/others/Button";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-start justify-center">
      <h1 className="textH1 mb-10">Puslapis nerastas</h1>
      <Button href="/" styles="absolute left-10 bottom-10" reverse >Grįžti į pagrindinį</Button>
    </div>
  );
}
