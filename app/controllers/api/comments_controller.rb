class Api::CommentsController < ApplicationController

  def index
    @comments = Story.find(params[:story_id])
      .comments
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def comment_params
    params.require(:comment).permit(:user_id, :story_id, :comment)
  end


end
