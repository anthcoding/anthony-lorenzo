import { BlogPosts } from 'app/components/posts';
import Projects from './components/projects';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Hello visitor.
      </h1>
      <p className="mb-4 opacity-75">{`That feels distant, doesn’t it? Looking for someone who truly connects, who “gets it”? I’m Anthony, and to me, it’s more than code or design; it’s about crafting lasting experiences.`}</p>
      <p className="mb-4 opacity-75">{`  My work goes beyond functionality or aesthetics—it’s about creating moments that matter. If you’re here, you’re likely looking for a shared vision. That’s where purpose meets creativity, and where great things get built together.
`}</p>
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
