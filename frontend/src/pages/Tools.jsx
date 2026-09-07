function Tools() {
const tools = [
{
name: 'ChatGPT',
category: 'AI Assistant',
description: 'Ask questions, learn new topics, write content and solve problems with AI.',
},
{
name: 'Gemini',
category: 'AI Assistant',
description: 'Explore ideas, research topics and get help with everyday tasks.',
},
{
name: 'Canva AI',
category: 'Design',
description: 'Create designs, presentations and visual content with AI-powered features.',
},
{
name: 'GitHub Copilot',
category: 'Coding',
description: 'Get AI assistance while writing and understanding code.',
},
]

return (
<section className="section">
<h1>AI Tools</h1>
<p>Discover tools that can help you learn, create and work smarter.</p>

  <div className="cards">
    {tools.map((tool) => (
      <div className="card" key={tool.name}>
        <h3>{tool.name}</h3>
        <p><strong>{tool.category}</strong></p>
        <p>{tool.description}</p>
        <button className="primary-btn">Explore Tool</button>
      </div>
    ))}
  </div>
</section>

)
}

export default Tools
