select username, profile_pic, post_id, title, image_url from posts
join users on(user.user_id = post.user_id);