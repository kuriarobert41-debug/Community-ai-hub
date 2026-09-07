function Community() {
  const posts = [
    {
      name: 'AI Learners',
      title: 'How are you using AI to learn?',
      description:
        'Share how AI tools are helping you study, research and improve your skills.',
    },
    {
      name: 'Developers Hub',
      title: 'Share your AI project',
      description:
        'Show the community what you are building and get feedback from other members.',
    },
    {
      name: 'AI Creators',
      title: 'Best AI tools for creativity',
      description:
        'Discover and discuss AI tools for design, writing, video and other creative work.',
    },
  ]

  return (
    <section className="section">
      <h1>Community</h1>

      <p>
        Connect, share ideas, ask questions and learn together with the
        Community AI Hub.
      </p>

      <div className="cards">
        {posts.map((post) => (
          <div className="card" key={post.title}>
            <h3>{post.title}</h3>
            <p><strong>{post.name}</strong></p>
            <p>{post.description}</p>

            <button className="primary-btn">
              View Discussion
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Community
