class Api::FeedsController < ApplicationController

  def index

    following_array = User.find(params[:author_id]).following
    following_author_id = following_array.map(&:author_id)
    @feed = Story.where(author_id: following_author_id)
    render :feed

  end

end
