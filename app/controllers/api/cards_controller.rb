module Api
  class CardsController < ApiController
    before_action :require_board_member!

    def create
      @card = current_list.cards.new(card_params)

      if @card.save
        render json: @card
      else
        render json: @card.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @card = Card.find(params[:id])
      if @card.update_attributes(card_params)
        render json: @card
      else
        render json: @card.errors.full_messages,
               status: :unprocessable_entity
      end
    end

    private

    def current_list
      if params[:id]
        @card = Card.find(params[:id])
        @list = @card.list
      elsif params[:card]
        @list = List.find(params[:card][:list_id])
      end
    end

    def current_board
      current_list.board
    end

    def card_params
      params.require(:card).permit(:title, :list_id, :ord)
    end
  end
end
