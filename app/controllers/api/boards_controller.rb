module Api
  class BoardsController < ApiController
    def create
      @board = current_user.boards.new(board_params)

      if @board.save
        render json: @board
      else
        render json: @board.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @board = current_user.boards.find(params[:id])
      @board.try(:destroy)
      render json: {}
    end

    def index
      @boards = current_user.boards
      render json: @boards
    end

    def show
      @board = Board.includes(:members, lists: :cards).find(params[:id])

      if @board.is_member?(current_user)
        render :show
      else
        render json: ["You aren't a member of this board"], status: 403
      end
    end

    private

    def board_params
      params.require(:board).permit(:title)
    end
  end
end
