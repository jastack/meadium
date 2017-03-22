class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def feed
    feed_array = User.find(params).feed_authors
    @feed = feed_array.map(&:stories).flatten
    render :feed
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
