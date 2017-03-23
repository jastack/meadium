class Api::FollowsController < ApplicationController

  def following
    @follows = User.find(params[:author_id]).following
    render :following
  end

  def followers
    @follows = User.find(params[:author_id]).followers
    render :followers
  end

  def create
    @follow = Follow.new(user_id: params[:user_id], author_id: params[:author_id])

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    render :show
  end


end
