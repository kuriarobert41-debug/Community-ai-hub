function Resources() {
const resources = [
{
title: 'AI for Beginners',
type: 'Guide',
description: 'Learn the basic concepts of artificial intelligence and how AI is used in everyday life.',
},
{
title: 'Prompt Engineering',
type: 'Tutorial',
description: 'Learn how to write clear and effective prompts to get better results from AI tools.',
},
{
title: 'AI Coding',
type: 'Learning',
description: 'Discover how AI can help you write, understand and improve your code.',
},
{
title: 'AI Project Ideas',
type: 'Projects',
description: 'Explore practical AI project ideas that you can build and share with the community.',
},
]

return (
<section className="section">
<h1>Learning Resources</h1>

  <p>
    Learn AI through guides, tutorials, projects and practical resources.
  </p>

  <div className="cards">
    {resources.map((resource) => (
      <div className="card" key={resource.title}>
        <h3>{resource.title}</h3>
        <p><strong>{resource.type}</strong></p>
        <p>{resource.description}</p>

        <button className="primary-btn">
          Read More
        </button>
      </div>
    ))}
  </div>
</section>

)
}

export default Resources
