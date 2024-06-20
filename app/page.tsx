import { Paragraph } from "@/components/Paragraph";

export default async function Index() {
  return (
    <>
      <h1>hello</h1>
      <div className="text-primary">Billie Eilish</div>
      <div className="text-tertiary">Text</div>
      <div className="text-error">Some error</div>
      <Paragraph>Do you want to tell me something nice?</Paragraph>
      <Paragraph>Do not bother!</Paragraph>
    </>
  );
}
