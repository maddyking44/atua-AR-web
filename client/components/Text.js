const Text = ({text}) => {
  return (
    <h1 class='text'><span class='te-reo'>{text.title.tereo}</span><span className='english'>{text.title.english}</span<</h1>
    {text.map(text => {
      return <p className='text'><span className='tereo'>{text.paragraphs.tereo}</p>
    })}
  )
}

mapStateToProps= (state) => {
  return {
    text: state.current_text
  }
}

export default connect(mapStateToProps)(Text)
