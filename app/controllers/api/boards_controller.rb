module Api
  class BoardsController < ApplicationController
    def index
      # TODO: replace with current_user.boards
      @boards = current_user.boards
      render json: @boards
    end
  end
end
