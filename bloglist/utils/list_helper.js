const dummy = (blogs) => {
	return (1)
  }
  
  const totalLikes = (blogs) => {
	const totalLikes = blogs.reduce(
		(sum, blog) => sum + blog.likes, 0
	)
	return (totalLikes)
  }

  const favoriteBlog = (blogs) => {
	if (blogs.length === 0)
		return null

	let favorite = blogs.reduce(
		(prev, next) => next.likes > prev.likes ? next : prev
	)

	return {
		title: favorite.title,
		author: favorite.author,
		likes: favorite.likes
	}
  }

  module.exports = {
	dummy, totalLikes, favoriteBlog
  }