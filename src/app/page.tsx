import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><figure className="bg-pink-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="/rehan.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Maria Ghafoor is an inspiring and innovative science teacher who is deeply committed to sparking curiosity and enthusiasm for science in her students. With a solid foundation in [specific field of science, e.g., Chemistry, Biology, Earth Sciences], Maria is known for her ability to break down complex concepts into engaging and understandable lessons. She utilizes a variety of teaching methods, including interactive experiments, multimedia resources, and real-life applications, to make science come alive in the classroom.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Maria Ghafoor
      </div>
      <div>
        Science teacher 
      </div>
    </figcaption>
  </div>
</figure>
</div>
          </main>
  );
}
