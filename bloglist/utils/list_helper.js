const _ = require("lodash")

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

  const mostBlogs = (blogs) => {
	if (blogs.length === 0)
		return null
	
	const blogCount = _.countBy(blogs, "author")

	// console.log(blogCount)

	const most = Object.keys(blogCount).reduce(
		(prev, next) => blogCount[next] > blogCount[prev] ? next : prev
	)

	// console.log(most)
	return {
		author: most,
		blogs: blogCount[most]
	}
  }

  const mostLikes = (blogs) => {
	if (blogs.length === 0)
		return null

	const authors = _.groupBy(blogs, "author")

	// console.log(authors)
	const countLikes = _.mapValues(authors, (o) => o.reduce((sum, blog) =>
		sum + blog.likes, 0
	))

	const most = Object.keys(countLikes).reduce(
		(prev, next) => countLikes[next] > countLikes[prev] ? next : prev
	)

	// console.log(most)
	return {
		author: most,
		likes: countLikes[most]
	}
  }

  module.exports = {
	dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
  }