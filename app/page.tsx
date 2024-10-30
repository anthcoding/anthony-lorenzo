import { BlogPosts } from 'app/components/posts';
import Projects from './components/projects';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Hello visitor.
      </h1>
      <p className="mb-4 opacity-75">{`That feels distant, doesn’t it? Maybe you’re looking for someone to connect with, someone who gets it. I’m Anthony, and for me, it’s not just about code or design; it’s about creating experiences that shape how people interact with their world. It’s more than building something functional or visually appealing it’s about crafting moments that leave a lasting impression.`}</p>
      <p className="mb-4 opacity-75">{`  If you’re here, you’re probably searching for more than just a product. You’re looking for a shared vision, a connection with someone who speaks your language. That’s where purpose meets creativity, and where great things get built together.`}</p>
      <div className="my-8">
        <h3 className="text-xl font-semibold">Pinned Projects</h3>
        <Projects />
      </div>
      <div className="my-8">
        <h3 className="text-xl font-semibold">Blogs</h3>
        <BlogPosts />
      </div>
    </section>
  );
}
