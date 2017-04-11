class Api::TopicsController < ApplicationController


  def show
    @stories = Topic.find(params[:id]).stories
    render :show
  end

end
