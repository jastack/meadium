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

  end

  
end
