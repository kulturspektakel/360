declare module "./data.json" {
  interface IPhoto {
    title: string;
    position: [number, number];
    filename: string;
  }
  const a = {
    photos: Array<IPhoto>
  };
  export default a;
}
