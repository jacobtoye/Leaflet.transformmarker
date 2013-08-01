L.TransformMarker = L.Marker.extend({
	setTransform: function (transform) {
		this._transform = transform;
	},

	_setPos: function (pos) {
		L.Marker.prototype._setPos.call(this, pos);

		if (L.Browser.any3d && this._transform) {
			this._icon.style[L.DomUtil.TRANSFORM] += this._transform;
		}
	}
});