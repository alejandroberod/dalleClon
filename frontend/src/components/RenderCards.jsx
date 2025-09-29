import Card from "./Card";

export default function RenderCards({data, title}) {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post}/>);
  }

  return (
    <h2 className='mt-5 font-bold text-[#FF2F61] text-xl uppercase'>
      {title}
    </h2>
  )
}