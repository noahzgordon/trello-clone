module Api
  class ListsController < ApiController
    before_action :require_board_member!

    def create
      @list = current_board.lists.new(list_params)

      if @list.save
        render json: @list
      else
        render json: @list.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @list = List.find(params[:id])
      @list.destroy
      render json: {}
    end

    def update
      @list = current_board.lists.find(params[:id])

      if @list.update_attributes(list_params)
        render json: @list
      else
        render json: @list.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def current_board
      if params[:id]
        @list = List.find(params[:id])
        @board = @list.board
      elsif params[:list]
        @board = Board.find(params[:list][:board_id])
      end
    end

    def list_params
      params.require(:list).permit(:title, :board_id, :ord)
    end
  end
end
