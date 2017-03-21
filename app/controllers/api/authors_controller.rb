class Api::AuthorsController < ApplicationController

  def index
    @authors = User.all
    render :index
  end

  def show
    @author = User.find(params[:id])
    render :show
  end

end
