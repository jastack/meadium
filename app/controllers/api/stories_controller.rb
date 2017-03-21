class Api::StoriesController < ApplicationController

  def index
    @stories = Story.all
    render :index
  end

  def show
    @story = Story.find(params[:id])
    render :show
  end

  def create
    @story = Story.new(story_params)

    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def story_params
    params.require(:story).permit(:title, :body, :author_id, :image_url, :subtitle)
  end
end
