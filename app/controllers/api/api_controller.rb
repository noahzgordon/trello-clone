module Api
  class ApiController < ApplicationController
    before_action :require_signed_in!
  end
end
