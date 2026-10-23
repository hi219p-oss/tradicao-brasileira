type EditorialFactBlockProps = {
  title: string;
  body: string;
};

export function EditorialFactBlock({
  title,
  body,
}: EditorialFactBlockProps) {
  return (
    <section className="max-w-prose">
      <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
        {title}
      </h3>
      <p className="m-0 text-sm leading-7 text-muted-foreground">{body}</p>
    </section>
  );
}
