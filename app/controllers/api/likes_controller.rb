class Api::LikesController < ApplicationController

  def index
    @likes = Story.find(params[:story_id]).likes
    render :index
  end

  def create
    @like = Like.new(like_params)

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end

  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render :show

  end

  def like_params
    params.require(:like).permit(:user_id, :story_id)
  end

end
